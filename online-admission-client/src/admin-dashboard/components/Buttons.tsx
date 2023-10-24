import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-btn-primary text-white shadow-md hover:bg-primary/90",
        destructive:
          "bg-btn-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "bg-btn-outline border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "shadow-none hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 shadow-none hover:underline",
      },
      size: {
        default: "h-8 px-4 py-2",
        sm: "h-8 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-8 w-8 p-0",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants & IButtonProps> {
        asChild?: boolean;
        label?: string;
        loading?: boolean | null;
        bgColor?: string;
        color?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, label, loading, bgColor, color, asChild = false, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={{
        }}
        disabled={loading!}
        {...props}
      >
        {loading ? <PleaseWait className=""/> : <span>{label}</span>}
      </Comp>
    );
  }
);
Button.displayName = "Button";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("animate-spin", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="150"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}

export const PleaseWait = ({className, circle}: {className?: string, circle?: boolean}) => {
  return (
    <div className="flex justify-between items-center gap-x-4">
      {circle ? (
        <div
          className={cn(
            "animate-spin ease-linear rounded-full border-t-2 border-b-2 h-4 w-4 mx-auto",
            className
          )}
        ></div>
      ) : (
        <Spinner className="h-3 w-3 text-gray-600" />
      )}
      <p
        className={cn(
          "capitalize text-gray-800 text-sm font-normal",
          className
        )}
      >
        Please Wait...
      </p>
    </div>
  );
};

function DeleteButton({ onClick }: ButtonProps, props: ButtonProps) {
  return <Button bgColor="red" label="Delete" onClick={onClick} {...props} />;
}

function CloseButton({ onClick }: ButtonProps, props: ButtonProps) {
  return (
    <Button
      bgColor="red"
      label="NO"
      onClick={onClick}
      {...props}
    />
  );
}

function SaveButton({ onClick }: ButtonProps, props: ButtonProps) {
  return (
    <Button
      bgColor="green"
      label="YES"
      onClick={onClick}
      {...props}
    />
  );
}

function EditButton({ onClick }: ButtonProps, props: ButtonProps) {
  return <Button bgColor="blue" label="Edit" onClick={onClick} {...props} />;
}

function AddButton({ onClick }: ButtonProps, props: ButtonProps) {
  return <Button bgColor="green" label="Add" onClick={onClick} {...props} />;
}

export { Button, buttonVariants, DeleteButton, EditButton, AddButton, CloseButton, SaveButton };
