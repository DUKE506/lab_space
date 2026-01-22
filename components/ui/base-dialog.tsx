import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

interface BaseDialogProps {
  title: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  preventClose?: boolean;
}

const BaseDialog = ({
  title,
  trigger,
  children,
  preventClose = false,
}: BaseDialogProps) => {
  const handleInteractOutside = (e: Event) => {
    if (preventClose) {
      e.preventDefault();
    }
  };

  const handleEscapeKeyDown = (e: KeyboardEvent) => {
    if (preventClose) {
      e.preventDefault();
    }
  };

  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent
        className="w-150 h-150"
        onInteractOutside={handleInteractOutside}
        onEscapeKeyDown={handleEscapeKeyDown}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="sr-only"></DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default BaseDialog;
