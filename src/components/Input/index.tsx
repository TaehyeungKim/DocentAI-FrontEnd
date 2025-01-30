import {
  forwardRef,
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

interface IInput extends React.ComponentPropsWithoutRef<"textarea"> {
  placeholder: string;
  inputValue?: string;
  style?: React.CSSProperties;
  onInputChange?: (value: string) => void;
  className?: string;
}

export const Input = forwardRef(function Input(
  {
    placeholder,
    inputValue,
    style,
    onInputChange,
    className,
    ...props
  }: IInput,
  ref: React.LegacyRef<HTMLTextAreaElement>
) {
  return (
    <textarea
      ref={ref}
      className={twMerge(
        "px-3 border-primary border-[1px] py-[14px] leading-normal placeholder:leading-normal text-regular w-full box-border rounded-full",
        className
      )}
      placeholder={placeholder}
      rows={1}
      style={style}
      onChange={(e) => {
        onInputChange && onInputChange(e.target.value);
      }}
      value={inputValue}
      {...props}
    ></textarea>
  );
});

interface IScrollInput {
  placeholder: string;
  onInputChange: (value: string) => void;
  inputValue: string;
}

export const ScrollInput = ({
  placeholder,
  onInputChange,
  inputValue,
}: IScrollInput) => {
  const [textareaStyle, setTextAreaStyle] = useState<React.CSSProperties>({
    maxHeight: "10vh",
    minHeight: "45px",
  });
  const deferredTextareaStyle = useDeferredValue(textareaStyle);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleScrollInputValueChange = (value: string) => {
    onInputChange(value);
    if (textRef.current?.offsetHeight !== textRef.current?.scrollHeight) {
      setTextAreaStyle({ ...textareaStyle, height: "auto" });
    }
  };

  useLayoutEffect(() => {
    if (textareaStyle.height === "auto")
      setTextAreaStyle({
        ...textareaStyle,
        height: textRef.current?.scrollHeight,
      });

    if (
      typeof textareaStyle.height === "number" &&
      typeof deferredTextareaStyle.height === "number"
    ) {
    }
  }, [textareaStyle]);

  useEffect(() => {
    const textareaHeight = textRef.current?.offsetHeight;
    console.log(textareaHeight);

    if (textareaHeight)
      setTextAreaStyle({
        ...textareaStyle,
        borderRadius: `${textareaHeight / 2}px`,
        height: textareaHeight,
      });
  }, []);

  return (
    <Input
      placeholder={placeholder}
      onInputChange={handleScrollInputValueChange}
      inputValue={inputValue}
      style={textareaStyle}
      ref={textRef}
    ></Input>
  );
};
