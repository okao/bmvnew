// import Image from 'next/image';
"use client"

import { useEffect, useState } from "react"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react"
import { FiMinus, FiPlus } from "react-icons/fi"
import { Tweet } from "react-tweet"

import { mvRasmee, mvWaheed } from "@/config/fonts"
import { cn } from "@/lib/utils"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import PostContentType, {
  type ArticleMain,
} from "@/components/admin/post-content-type"
import { TwitterComponent } from "@/components/common/TwitterComponent"

export default function AdminPage() {
  const [selection, setSelection] = useState("")
  const [cards, setCards] = useState([])
  const [toggleFormBool, setToggleFormBool] = useState(true)
  const [drawer, setDrawer] = useState(false)
  const [formData, setFormData] = useState<ArticleMain>({
    title: "",
    description: "",
    mainImage: "",
    tags: [] as string[],
  } as ArticleMain)
  const [otherFields, setOtherFields] = useState<ArticleMain[]>(
    [] as ArticleMain[]
  )

  const handleUpdate = (data: ArticleMain) => {
    // console.log("Handle Update", data)
    setFormData(data)

    // let currentFields = otherFields

    //from data?.fields
    if (data?.field) {
      // currentFields.push(

      // )
      setOtherFields([...otherFields, data])
    }

    console.log("Handle Update", formData)
    console.log("Handle Update", otherFields)
  }

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-5 md:col-span-2 md:block lg:col-span-2">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4">
            <h1 className="border-b py-2 text-2xl font-bold">News Article</h1>
          </div>
          <div className="overflow-y-auto">
            <PostContentType onDataUpdate={(data) => handleUpdate(data)} />
          </div>
        </div>
      </div>
      <div className="col-span-5 overflow-y-auto bg-gray-50 dark:bg-slate-800 md:col-span-3 lg:col-span-3">
        <div className="flex h-full flex-col p-6">
          <p
            className={cn(
              "rtl border-b pb-4 text-xl font-bold dark:border-slate-600",
              mvWaheed.className
            )}
          >
            {formData?.title}
          </p>

          <p
            className={cn(
              "rtl border-b py-4 font-normal dark:border-slate-600",
              mvRasmee.className
            )}
          >
            {formData?.description}
          </p>

          {
            <div className="flex flex-wrap gap-2">
              {formData?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-500 px-2 py-1 text-xs font-semibold text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          }

          {otherFields?.map(
            (field, index) =>
              [
                "heading",
                "heading2",
                "heading3",
                "heading4",
                "heading5",
                "heading6",
              ].includes(field?.field?.type as string) && (
                <div
                  key={index}
                  className="flex justify-between border-b dark:border-slate-600"
                >
                  <div className="flex flex-col gap-2  ">
                    <p
                      className={cn(
                        "rtl py-4 font-normal ",
                        mvRasmee.className
                      )}
                    >
                      {field?.field?.value as string}
                    </p>
                  </div>
                  <div>
                    {/* close button */}
                    <Button
                      size="sm"
                      onClick={() => {
                        setOtherFields(
                          otherFields.filter((item) => item !== field)
                        )
                      }}
                      className="bg-red-500 text-white"
                    >
                      <FiMinus />
                    </Button>
                  </div>
                </div>
              )
          )}

          {otherFields?.map(
            (field, index) =>
              ["tweet"].includes(field?.field?.type as string) && (
                <div
                  key={index}
                  className="flex justify-between border-b dark:border-slate-600"
                >
                  <div>
                    <Tweet
                      id={
                        field?.field?.value?.match(
                          /\/status\/(\d+)/
                        )?.[1] as string
                      }
                      // components={TwitterComponent}
                    />
                  </div>
                  <div>
                    {/* close button */}
                    <Button
                      size="sm"
                      onClick={() => {
                        setOtherFields(
                          otherFields.filter((item) => item !== field)
                        )
                      }}
                      className="bg-red-500 text-white"
                    >
                      <FiMinus />
                    </Button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  )
}
