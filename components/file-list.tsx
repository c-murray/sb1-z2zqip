"use client";

import { File } from "@prisma/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface FileListProps {
  files: File[];
  isAdmin: boolean;
}

export function FileList({ files, isAdmin }: FileListProps) {
  const handleDelete = async (fileId: string) => {
    // Implement delete functionality
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Created At</TableHead>
          {isAdmin && <TableHead>Actions</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {files.map((file) => (
          <TableRow key={file.id}>
            <TableCell>{file.name}</TableCell>
            <TableCell>{new Date(file.createdAt).toLocaleDateString()}</TableCell>
            {isAdmin && (
              <TableCell>
                <Button variant="destructive" onClick={() => handleDelete(file.id)}>Delete</Button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}