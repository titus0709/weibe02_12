import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import SecondDesignView from "./SecondDesignView";

const SecondDesignModal = ({ getSecondDesign }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <p className="font-bold">Choose Second Design</p>
      </DialogTrigger>

      <DialogHeader>
        <DialogContent className="">
          <DialogHeader>
            <SecondDesignView
              getSecondDesign={getSecondDesign}
              setOpen={setOpen}
            />
          </DialogHeader>
        </DialogContent>
      </DialogHeader>
    </Dialog>
  );
};

export default SecondDesignModal;
