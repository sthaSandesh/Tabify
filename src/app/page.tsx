import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
     
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Tabify</CardTitle>
            <CardDescription>
              Enter your Tab to turn into an App
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="link">Link</Label>
                  <Input
                    id="link"
                    type="text"
                    placeholder="https://your-tab-link.com"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              save
            </Button>
          </CardFooter>
        </Card>
      </div>
  );
}
