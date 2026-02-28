"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function SaveLinkCard() {
  const [link, setLink] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!link.trim()) return;
    localStorage.setItem("savedLink", link.trim());
    window.location.reload();
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Tabify</CardTitle>
        <CardDescription>Enter your Tab to turn into an App</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="link">Link</Label>
              <Input
                id="link"
                type="text"
                placeholder="https://your-tab-link.com"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2 pt-4">
          <Button type="submit" className="w-full">
            Save
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
