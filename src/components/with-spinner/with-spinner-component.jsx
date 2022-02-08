import React from "react";
import "./with-spinner.scss";

const withSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  const Spinner = isLoading ? (
    <div className="spinner-overlay">
      <div className="spinner-container"></div>
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );

  return Spinner;
};

export default withSpinner;
