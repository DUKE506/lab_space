import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { ScrollArea } from "./scroll-area";

interface BaseDialogProps {
  title: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  preventClose?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const BaseDialog = ({
  title,
  trigger,
  children,
  preventClose = false,
  open,
  onOpenChange,
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent
        className="w-150 xl:max-h-[80vh] overflow-hidden "
        onInteractOutside={handleInteractOutside}
        onEscapeKeyDown={handleEscapeKeyDown}
      >
        <DialogHeader className="px-6">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="sr-only"></DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default BaseDialog;
