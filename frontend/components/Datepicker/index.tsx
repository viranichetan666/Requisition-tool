import React, { InputHTMLAttributes, Ref } from "react";
import { classNames } from "helpers/method";

interface InputType {
  labelName?: string;
  errorMessage?: string;
}

const Datepicker = React.forwardRef(
  (
    {
      labelName,
      errorMessage,
      className,
      ...restProps
    }: InputType & InputHTMLAttributes<HTMLInputElement>,
    ref: Ref<HTMLInputElement> | undefined
  ) => {
    return (
      <div className="mb-3">
        <div className="text-subtitle3 mb-2">
          <label>{labelName}</label>
        </div>
        <input
          {...restProps}
          ref={ref}
          type="date"
          className={classNames(
            "w-full border border-1 bg-white p-1 text-gray-dark placeholder:text-gray-dark focus:ring-0 sm:text-sm sm:leading-6 rounded-sm",
            className
          )}
        />
        {errorMessage && (
          <p className="text-error-primary text-subtitle1 mt-1">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

export default Datepicker;
