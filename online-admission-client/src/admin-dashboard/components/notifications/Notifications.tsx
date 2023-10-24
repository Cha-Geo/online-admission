import React from "react";

interface AlertProps {
  message: string;
  color?: string;
}

const Alert: React.FC<AlertProps> = ({ message, color }) => (
  <div
    className={`bg-${color}-100 text-center rounded-lg px-6 py-3 mb-4 text-base text-${color}-700`}
    role="alert"
  >
    {message}
  </div>
);

const Success: React.FC<AlertProps> = ({
  message = "A simple success alert - check it out!",
}) => <Alert message={message} color="green" />;

const ErrorM: React.FC<AlertProps> = ({
  message = "A simple error alert - check it out!",
}) => <Alert message={message} color="red" />;

export { Success, ErrorM };
