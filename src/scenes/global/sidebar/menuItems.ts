type Item = {
  title: string;
  to: string;
  icon: string;
};

type MenuItems = {
  [key: string]: Item[];
};

export const menuItems: MenuItems = {
  Data: [
    {
      title: "Manage Team",
      to: "/team",
      icon: "people",
    },
    {
      title: "Contacts Information",
      to: "/contacts",
      icon: "contacts",
    },
    {
      title: "Invoices Balances",
      to: "/invoices",
      icon: "receipt",
    },
  ],
  Pages: [
    {
      title: "Profile Form",
      to: "/form",
      icon: "person",
    },
    {
      title: "Calendar",
      to: "/calendar",
      icon: "calendar",
    },
    {
      title: "FAQ Page",
      to: "/faq",
      icon: "help",
    },
  ],
  Charts: [
    {
      title: "Bar Chart",
      to: "/bar",
      icon: "bar",
    },
    {
      title: "Pie Chart",
      to: "/pie",
      icon: "pie",
    },
    {
      title: "Line Chart",
      to: "/line",
      icon: "line",
    },
    {
      title: "Geography Chart",
      to: "/geography",
      icon: "map",
    },
  ],
};
