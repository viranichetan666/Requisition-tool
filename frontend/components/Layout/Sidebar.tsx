import Link from "next/link";
import { useRouter } from "next/router";
import { HomeIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Settings", href: "/settings", icon: Cog8ToothIcon },
];

const Sidebar = () => {
  const router = useRouter();

  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };

  const checkRouteActive = (routeName: string) => {
    if (routeName === "/") {
      return routeName === router.pathname;
    } else {
      return router.pathname.includes(routeName);
    }
  };

  return (
    <>
      <div className="flex h-16 shrink-0 items-center text-white">App Name</div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={classNames(
                      checkRouteActive(item.href)
                        ? "bg-primary-main text-white"
                        : "text-indigo-200 hover:text-white hover:bg-primary-main",
                      "group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        checkRouteActive(item.href)
                          ? "text-white"
                          : "text-indigo-200 group-hover:text-white",
                        "h-5 w-5 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
