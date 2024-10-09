"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FileUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    setIsUploading(true);
    // Implement file upload logic here
    setIsUploading(false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-8">
      <div>
        <Label htmlFor="file">Upload File</Label>
        <Input id="file" type="file" {...register("file", { required: true })} />
      </div>
      <Button type="submit" disabled={isUploading}>
        {isUploading ? "Uploading..." : "Upload"}
      </Button>
    </form>
  );
}