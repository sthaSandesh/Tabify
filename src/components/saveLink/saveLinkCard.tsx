
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

export default function saveLinkCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Tabify</CardTitle>
        <CardDescription>Enter your Tab to turn into an App</CardDescription>
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
  );
}
