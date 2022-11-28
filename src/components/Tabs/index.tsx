import React from 'react';
import { TabTypes, TabContentTypes } from './Tabs.types';
import { uuid } from '../../../utils/main';

const Tabs: React.FC<TabTypes> = props => {
  const { items, defaultSelected, onChange } = props;
  const [selectedTab, setSelectedTab] = React.useState<string>('');

  React.useEffect(() => {
    const keys = items.map(item => item.key);
    if (defaultSelected && keys.includes(defaultSelected)) {
      setSelectedTab(defaultSelected);
    } else {
      setSelectedTab(items.length ? items[0].key : '');
    }
  }, []);

  React.useEffect(() => {
    if (selectedTab && onChange) {
      onChange(selectedTab);
    }
  }, [selectedTab]);

  return (
    <div className="twist-tabs">
      {/* Rendering Labels */}
      <div className="tab-labels border-b-2 pb-2 border-gray-100">
        {items.map(item => {
          const isSelected = item.key === selectedTab;
          return (
            <span
              onClick={() => setSelectedTab(item.key)}
              className={`mx-2 pb-2 px-4 font-bold text-gray-600 cursor-pointer hover:text-primary ${
                isSelected ? 'text-primary border-b-4 border-primary' : ''
              }`}
              key={uuid()}
            >
              {item.label}
            </span>
          );
        })}
      </div>
      {/* Rendering Tab Content */}
      <div className="tab-contents">
        {items.map(item => {
          const isSelected = item.key === selectedTab;
          return (
            <TabContent
              key={uuid()}
              isSelected={isSelected}
              children={item.children}
            />
          );
        })}
      </div>
    </div>
  );
};

const TabContent: React.FC<TabContentTypes> = props => {
  const { isSelected, children } = props;
  if (!isSelected) return <></>;

  return <div className="mt-4 mx-2">{children}</div>;
};

export default Tabs;
