import React, { useState } from "react"
import slugify from "@sindresorhus/slugify"

import { mvRasmee } from "@/config/fonts"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Textarea } from "../ui/textarea"

export type ArticleMain = {
  title: string
  mainImage: string
  slug: string
  tags?: string[]
  description?: string
  field?: {
    type: string
    value: string
  }
  dynamicFields?: {
    type: string
    value: string
  }[]
}

const PostContentType = ({ onDataUpdate }) => {
  const [articleMain, setArticleMain] = React.useState<ArticleMain>({
    title: "",
    mainImage: "",
    slug: "",
    tags: [],
    description: "",
  })
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //generate slug
    const slug = slugify(e.target.value, {
      lowercase: true,
      separator: "-", // default is `-`
    })
    setArticleMain((prev) => ({ ...prev, slug }))
    setArticleMain((prev) => ({ ...prev, title: e.target.value }))

    //call parent function
    onDataUpdate({ ...articleMain, title: e.target.value, slug })
  }

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setArticleMain((prev) => ({ ...prev, description: e.target.value }))

    //call parent function
    onDataUpdate({ ...articleMain, description: e.target.value })
  }

  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticleMain((prev) => ({ ...prev, mainImage: e.target.value }))

    //call parent function
    onDataUpdate({ ...articleMain, mainImage: e.target.value })
  }

  const [field, setField] = useState({
    type: "",
    value: "",
  })

  const FieldTypes = [
    { value: "heading", label: "Heading" },
    { value: "heading2", label: "Heading 2" },
    { value: "heading3", label: "Heading 3" },
    { value: "heading4", label: "Heading 4" },
    { value: "heading5", label: "Heading 5" },
    { value: "textarea", label: "Textarea" },
    { value: "link", label: "Link" },
    { value: "image", label: "Image" },
    { value: "video", label: "Video" },
    { value: "file", label: "File" },
    { value: "tweet", label: "Tweet" },
  ]

  const onFieldChange = (e) => {
    setField({ type: e, value: "" })
  }

  const onAddField = () => {
    console.log("field", field)
    //call parent function
    onDataUpdate({ ...articleMain, field })

    setField({ type: "", value: "" })
  }

  return (
    <Tabs defaultValue="main" className="w-full px-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="main">Main</TabsTrigger>
        <TabsTrigger value="others">Dynamic</TabsTrigger>
      </TabsList>
      <TabsContent value="main">
        <Card>
          <CardHeader>
            <CardTitle>Usual Content</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                defaultValue={""}
                onChange={handleTitleChange}
                value={articleMain.title}
                className={cn("rtl text-lg", mvRasmee.className)}
                lang="dv-MV"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="mainImage">Main Image Url</Label>
              <Input
                id="mainImage"
                defaultValue={""}
                value={articleMain.mainImage}
                onChange={(e) =>
                  setArticleMain((prev) => ({
                    ...prev,
                    mainImage: e.target.value,
                  }))
                }
                type="url"
                accept="https://*"
              />
            </div>

            <div className="hidden space-y-1">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                disabled
                defaultValue={articleMain.slug}
                value={articleMain.slug}
              />
            </div>
          </CardContent>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                className={cn("rtl h-24", mvRasmee.className)}
                value={articleMain.description}
                onChange={(e) => handleDescriptionChange(e)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="content">Tags</Label>
              <Input id="content" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Clear</Button>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="others">
        <Card>
          <CardHeader>
            <CardTitle>Other Fields</CardTitle>
            <CardDescription>
              Select the type of field you want to add to the article.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Type of Field</Label>
              <Select
                onValueChange={(value) => {
                  onFieldChange(value)
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select The Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {FieldTypes.map((field) => (
                      <SelectItem key={field.value} value={field.value}>
                        {field.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              {/* <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" /> */}

              {field.type === "textarea" && (
                <div className="space-y-1">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    className={cn("rtl h-48", mvRasmee.className)}
                    value={field.value}
                    onChange={(e) =>
                      setField({ ...field, value: e.target.value })
                    }
                  />
                </div>
              )}

              {[
                "heading",
                "heading2",
                "heading3",
                "heading4",
                "heading5",
              ].includes(field.type) && (
                <div className="space-y-1">
                  <Label htmlFor="content">
                    {field.type.replace("heading", "Heading ")}
                  </Label>
                  <Input
                    id="content"
                    className={cn("rtl text-lg", mvRasmee.className)}
                    value={field.value}
                    onChange={(e) =>
                      setField({ ...field, value: e.target.value })
                    }
                  />
                </div>
              )}
            </div>

            {["link", "tweet", "image", "video", "file"].includes(
              field.type
            ) && (
              <div className="space-y-1">
                <Label htmlFor="content">
                  {field.type === "link"
                    ? "Link URL"
                    : field.type === "tweet"
                      ? "Tweet URL"
                      : field.type === "image"
                        ? "Image URL"
                        : field.type === "video"
                          ? "Video URL"
                          : field.type === "file"
                            ? "File URL"
                            : "Content URL"}
                </Label>
                <Input
                  id="content"
                  value={field.value}
                  onChange={(e) => {
                    console.log(e.target.value)
                    setField({ ...field, value: e.target.value })
                  }}
                  type="url"
                  accept="https://*"
                />
              </div>
            )}

            {/* {["image", "video", "file"].includes(field.type) && (
              <div className="space-y-1">
                <Label htmlFor="content">
                  {field.type
                    .replace("image", "Image")
                    .replace("video", "Video")
                    .replace("file", "File")}
                </Label>
                <Input
                  id="content"
                  type="file"
                  accept={
                    field.type === "image"
                      ? "image/*"
                      : field.type === "video"
                        ? "video/*"
                        : ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.jpg,.jpeg,.png,.gif,.svg,.webp,.mp4,.mp3,.wav,.flac,.ogg,.avi,.mov,.wmv,.zip,.rar,.7z,.tar,.gz,.tgz,.bz2,.xz,.iso,.dmg,.apk,.exe,.msi,.deb,.rpm,.bin,.sh,.bat,.cmd,.ps1,.vbs,.js,.html,.css,.scss,.less,.json,.xml,.yaml,.yml,.toml,.ini,.conf,.cfg,.log,.txt,.md,.csv,.tsv,.sql,.db,.dbf,.mdb,.accdb,.sqlite,.sqlitedb,.db3,.db4,.db5,.dbf,.dbk,.db-journal,.db-shm,.db-wal"
                  }
                  onChange={(e) => {
                    console.log(e.target.files)
                    setField({ ...field, value: e.target.value })
                  }}
                />
              </div>
            )} */}
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="" onClick={(e) => onAddField()}>
              Add To Article
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default PostContentType
