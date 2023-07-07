import React, {
  DetailedHTMLProps,
  Ref,
  SelectHTMLAttributes,
} from "react";
import { classNames } from "helpers/method";

interface OptionType {
  value: string | number;
  label: string;
}

interface InputType {
  labelName?: string;
  errorMessage?: string;
  options?: OptionType[];
}

const Select = React.forwardRef(
  (
    {
      labelName,
      errorMessage,
      className,
      options,
      ...restProps
    }: InputType &
      DetailedHTMLProps<
        SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
      >,
    ref: Ref<HTMLSelectElement> | undefined
  ) => {
    return (
      <div className="mb-3">
        <div className="text-subtitle3 mb-2">
          <label>{labelName}</label>
        </div>
        <select
          {...restProps}
          ref={ref}
          className={classNames(
            "w-full border border-1 bg-white p-1 text-gray-dark placeholder:text-gray-dark focus:ring-0 sm:text-sm sm:leading-6 rounded-sm",
            className
          )}
        >
          {options?.map((option) => {
            return <option key={option.value} value={option.value}>{option.label}</option>;
          })}
        </select>
        {errorMessage && (
          <p className="text-error-primary text-subtitle1 mt-1">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

export default Select;
