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
    <div
      className="
    bg-white
    rounded-3xl
    border
    shadow-sm
    p-6
    overflow-hidden
    "
    >
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
                <Table.Row
                  key={user._id}
                  className="
                hover:bg-gray-50
                transition
                duration-200
                "
                >
                  {/* USER */}
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <div
                        className="
                      w-11
                      h-11
                      rounded-2xl
                      bg-gradient-to-br
                      from-indigo-500
                      to-purple-600
                      text-white
                      flex
                      items-center
                      justify-center
                      font-bold
                      shadow
                      "
                      >
                        {user.name?.charAt(0)}
                      </div>

                      <div>
                        <p
                          className="
                        font-semibold
                        text-gray-800
                        "
                        >
                          {user.name}
                        </p>

                        <p
                          className="
                        text-xs
                        text-gray-400
                        "
                        >
                          ID: {user._id?.slice(-6)}
                        </p>
                      </div>
                    </div>
                  </Table.Cell>

                  {/* EMAIL */}
                  <Table.Cell>
                    <span
                      className="
                    text-gray-600
                    text-sm
                    "
                    >
                      {user.email}
                    </span>
                  </Table.Cell>

                  {/* ROLE */}
                  <Table.Cell>
                    <span
                      className={`
                    px-3
                    py-1.5
                    rounded-full
                    text-xs
                    font-semibold
                    capitalize
                    inline-flex
                    items-center

                    ${
                      user.role === "Admin"
                        ? "bg-red-50 text-red-600 ring-1 ring-red-200"
                        : user.role === "Writer"
                          ? "bg-blue-50 text-blue-600 ring-1 ring-blue-200"
                          : user.role === "Reader"
                            ? "bg-purple-50 text-purple-600 ring-1 ring-purple-200"
                            : "bg-gray-100 text-gray-600"
                    }
                    `}
                    >
                      {user.role || "User"}
                    </span>
                  </Table.Cell>

                  {/* ACTIONS */}
                  <Table.Cell>
                    <div
                      className="
                    flex
                    flex-wrap
                    gap-2
                    "
                    >
                      {user.role !== "Reader" && (
                        <Button
                          onPress={() => handleRoleChange(user._id, "Reader")}
                          size="sm"
                          variant="flat"
                          className="
                        bg-purple-50
                        text-purple-600
                        hover:bg-purple-100
                        "
                        >
                          👤 Reader
                        </Button>
                      )}

                      {user.role !== "Writer" && (
                        <Button
                          onPress={() => handleRoleChange(user._id, "Writer")}
                          size="sm"
                          variant="flat"
                          className="
                        bg-blue-50
                        text-blue-600
                        hover:bg-blue-100
                        "
                        >
                          ✍️ Writer
                        </Button>
                      )}

                      {user.role !== "Admin" && (
                        <Button
                          onPress={() => handleRoleChange(user._id, "Admin")}
                          size="sm"
                          variant="flat"
                          className="
                        bg-green-50
                        text-green-600
                        hover:bg-green-100
                        "
                        >
                          🛡 Admin
                        </Button>
                      )}

                      <Button
                        onClick={() => handleDelete(user._id)}
                        size="sm"
                        variant="flat"
                        className="
                      bg-red-50
                      text-red-600
                      hover:bg-red-100
                      "
                      >
                        <RiDeleteBinLine />
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
