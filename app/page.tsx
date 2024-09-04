"use client";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { Bar, BarChart, CartesianGrid } from "recharts";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Hello!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>{" "}
      <br />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <p>bài 1</p>
      <Button variant="outline" className="bg-red-600">
        Destructive
      </Button>
      <Button variant="outline" className="bg-blue-600">
        Primary
      </Button>
      <Button variant="outline" className="bg-white text-black">
        Seconsary
      </Button>
      <Button variant="outline" className="bg-blue-600">
        Size lagre
      </Button>
      <Button variant="outline" className="bg-blue-600">
        size small
      </Button>
      <p>Bai 2 </p>
      <Input />
      <Input type="email" placeholder="Email" />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <label htmlFor="picture">Picture</label>
        <Input id="picture" type="file" />
      </div>
      <p>
        bai 3
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">List products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Oder</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Detail</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </p>
      <p>Bai 4 </p>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="MON HOC" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">HTML</SelectItem>
          <SelectItem value="dark">CSS</SelectItem>
          <SelectItem value="system">JavScript</SelectItem>
        </SelectContent>
      </Select>
      <p>Bai 5 </p>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />1
          <InputOTPSlot index={1} />2
          <InputOTPSlot index={2} />3
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />4
          <InputOTPSlot index={4} />5
          <InputOTPSlot index={5} />6
        </InputOTPGroup>
      </InputOTP>
      <p>Bai 6</p>
      <Slider defaultValue={[0]} max={100} step={1} />
    </div>
  );
}
