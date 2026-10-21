import { UserPlus } from "lucide-react";
import { getUsers } from "./actions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UserForm from "@/components/forms/user-form";

export default async function Page() {
  const users = await getUsers();

  return (
    <div className="flex flex-col w-full gap-4 max-w-7xl mx-auto p-4 md:p-24">
      <h1 className="text-2xl font-bold">Users</h1>
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger
            render={
              <Button>
                Add Users
                <UserPlus className="size-4" />
              </Button>
            }
          />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add User</DialogTitle>
              <DialogDescription>
                Add a new user to the database.
              </DialogDescription>
            </DialogHeader>
            <UserForm />
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
