import { Tab } from "@headlessui/react";
import { classNames } from "helpers/method";
import { useMemo } from "react";

interface TabType {
  key: string;
  title: string;
  component: React.ReactNode;
}

interface TabComponentType {
  tabs: TabType[];
  selected: string;
  onChangeTab: (key: string) => void;
}

const TabComponent = ({
  tabs = [],
  selected,
  onChangeTab,
}: TabComponentType) => {
  const selectedIndex = useMemo(() => {
    return tabs.findIndex((tab) => tab.key === selected);
  }, [selected, tabs]);

  const onChangeTabHandler = (index: number) => {
    onChangeTab(tabs[index].key);
  };
  return (
    <div className="-ml-3">
      <Tab.Group
        selectedIndex={selectedIndex}
        manual
        onChange={onChangeTabHandler}
      >
        <Tab.List className="flex">
          {!!tabs?.length &&
            tabs.map((tab) => {
              return (
                <Tab
                  className={({ selected }: any) =>
                    classNames(
                      "outline-0 px-3",
                      selected ? "text-gray-darker" : "text-gray-lighter"
                    )
                  }
                >
                  {tab.title}
                  <div
                    className={classNames(
                      "m-auto max-w-[50%] h-1",
                      selected === tab.key && "border-b-2 border-primary-main"
                    )}
                  ></div>
                </Tab>
              );
            })}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {!!tabs?.length &&
            tabs.map((tab) => {
              return (
                <Tab.Panel className={classNames("")}>
                  {tab.component}
                </Tab.Panel>
              );
            })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabComponent;
