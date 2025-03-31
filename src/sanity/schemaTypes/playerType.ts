import { defineType } from "sanity";

export default defineType({
  name: "player",
  title: "Player",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "number",
      title: "Number",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(99),
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      options: {
        list: ["Goalkeeper", "Defender", "Midfielder", "Forward"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Player Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
});
