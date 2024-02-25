"use client";
import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar({ label }) {
  return (
    <div>
      <Input
        icon={<MagnifyingGlassIcon className="h-5 w-5" />} // Adjust icon size here
        label={label}
        className="w-full max-w-xl"
      />
    </div>
  );
}
