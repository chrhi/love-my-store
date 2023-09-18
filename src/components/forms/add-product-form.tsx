"use client";

import React, { FC } from "react";
import { Button } from "../ui/button";

import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateReactHelpers } from "@uploadthing/react/hooks";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FileWithPreview } from "@/types";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import FileUploader from "../file-uploader";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

interface AddProductFormAbdullahProps {}

export const AddProductSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.string(),
  invantory: z.string(),
  status: z.string(),
  media: z.string().array(),
});

type Inputs = z.infer<typeof AddProductSchema>;

const AddProductForm: FC = ({}) => {
  const router = useRouter();

  const { useUploadThing } = generateReactHelpers<OurFileRouter>();

  const [files, setFiles] = React.useState<FileWithPreview[] | null>(null);

  const [isPending, startTransition] = React.useTransition();

  const { isUploading, startUpload } = useUploadThing("imageUploader");

  const form = useForm<Inputs>({
    resolver: zodResolver(AddProductSchema),
  });

  const mutation = useMutation({
    mutationFn: async (paylaod: Inputs & { imageUrl: string }) => {
      const { data } = await axios.post("/api/users/update-accout", paylaod);
      return data;
    },
    onError: () => {
      toast("oh no something went wrong");
    },
    onSuccess: () => {
      router.push("/adimn/product");
    },
  });

  return (
    <>
      <form name="add product" className="w-full h-fit gap-x-2 flex">
        <div className="w-[65%] flex flex-col h-fit min-h-[400px] ">
          <Card className="w-full p-2 h-[250px]">
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Title</Label>
                  <Input id="title" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    placeholder="Name of your project"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full p-2 min-h-[300px] h-fit my-4 pt-4">
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Media</Label>
                  <FileUploader
                    className="mx-auto"
                    setValue={(val) => console.log("hi")}
                    name="images"
                    maxFiles={3}
                    maxSize={1024 * 1024 * 4}
                    files={files}
                    setFiles={setFiles}
                    isUploading={isUploading}
                    disabled={isPending}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full p-2 h-[250px]">
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Inventory</Label>
                  <Label htmlFor="name">number of units </Label>
                  <Input id="title" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Pricing</Label>
                  <Label htmlFor="description">price for one unit</Label>
                  <Input id="title" placeholder="Name of your project" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-[35%] flex flex-col h-fit min-h-[400px] ">
          <Card className="w-[350px]">
            <CardContent>
              <div className="grid p-2 w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Status</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Active</SelectItem>
                      <SelectItem value="sveltekit">Draft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-[350px] pt-4 my-4 h-[200px]">
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">product organization</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Active</SelectItem>
                      <SelectItem value="sveltekit">Draft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
      <div className="w-full h-[100px] flex items-center gap-x-4 justify-end pr-8 ">
        <Button variant="secondary">cancel</Button>
        <Button>submit</Button>
      </div>
    </>
  );
};

export default AddProductForm;
