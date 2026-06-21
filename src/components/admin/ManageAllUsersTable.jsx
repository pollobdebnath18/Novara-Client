"use client";

import React, { useState } from "react";
import { Table, Button } from "@heroui/react";
import { TrashBin, Pencil } from "@gravity-ui/icons";
import { userDeleted, userRoleChanged } from "@/lib/actions/admin";
import { IoTrashBin } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";

export default function ManageAllUsersTable({ users }) {
  const [userList, setUserList] = useState(users);
  //   const [role, setRole] = useState(users?.role);
  const handleRoleChange = async (id, role) => {
    console.log(id, role);

    const res = await userRoleChanged(id, { role: role }, "PATCH");
    // update UI instantly
    setUserList((prev) =>
      prev.map((user) => (user._id === id ? { ...user, role: role } : user)),
    );
  };

  const handleDelete = async (id) => {
    const res = await userDeleted(id, "DELETE");
    setUserList((prev) => prev.filter((user) => user._id !== id));
  };

  return (
    <div className="bg-white border rounded-2xl p-4">
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Users Table">
            {/* HEADER */}
            <Table.Header>
              <Table.Column isRowHeader>User</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>

            {/* BODY */}
            <Table.Body>
              {userList.map((user) => (
                <Table.Row key={user._id}>
                  {/* USER */}
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                        {user.name?.charAt(0)}
                      </div>

                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-xs text-gray-500">
                          {user._id?.slice(-6)}
                        </p>
                      </div>
                    </div>
                  </Table.Cell>

                  {/* EMAIL */}
                  <Table.Cell>{user.email}</Table.Cell>

                  <Table.Cell>
                    <span
                      className={`
      px-3 py-1 rounded-full text-xs font-semibold capitalize

      ${
        user.role === "Admin"
          ? "bg-red-100 text-red-700 ring-1 ring-red-200"
          : user.role === "Writer"
            ? "bg-blue-100 text-blue-700 ring-1 ring-blue-200"
            : user.role === "Reader"
              ? "bg-purple-100 text-purple-700 ring-1 ring-purple-200"
              : "bg-gray-100 text-gray-700 ring-1 ring-gray-200"
      }
    `}
                    >
                      {user.role || "User"}
                    </span>
                  </Table.Cell>

                  {/* ACTIONS */}
                  <Table.Cell>
                    <div className="flex flex-wrap gap-2">
                      {/* ROLE ACTIONS */}

                      {user.role !== "Reader" && (
                        <Button
                          onPress={() => handleRoleChange(user._id, "Reader")}
                          size="sm"
                          variant="flat"
                          color="secondary"
                          startContent="👤"
                        >
                          Reader
                        </Button>
                      )}

                      {user.role !== "Writer" && (
                        <Button
                          onPress={() => handleRoleChange(user._id, "Writer")}
                          size="sm"
                          variant="flat"
                          color="primary"
                          startContent="✍️"
                        >
                          Writer
                        </Button>
                      )}

                      {user.role !== "Admin" && (
                        <Button
                          onPress={() => handleRoleChange(user._id, "Admin")}
                          size="sm"
                          variant="flat"
                          color="success"
                          startContent="🛡️"
                        >
                          Admin
                        </Button>
                      )}

                      {/* DELETE */}
                      <Button
                        onClick={() => handleDelete(user._id)}
                        size="sm"
                        variant="flat"
                        className="text-red-600 bg-red-50 hover:bg-red-100"
                        startContent={<RiDeleteBinLine />}
                      >
                        Delete
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
