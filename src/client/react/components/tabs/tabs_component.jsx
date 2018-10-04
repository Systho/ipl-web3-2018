import React from "react";


const TabsComponent = ({
    selectedTab,
    tabsArray,

    selectTab,
}) => {
    
    return(
        <section className="tabs">
        <ul className="tabs-title">
            { tabsArray.map( tab => (
                <li 
                    className={ selectedTab === tab ? "selected" : null}
                    key={tab.props.title} 
                    onClick={() => selectTab(tab)} 
                >
                    { tab.props.title }
                </li>
            ))}
        </ul>
        <div className="tabs-active-panel" >
            { selectedTab.props.panel }
        </div>
        </section>
    )

}

export default TabsComponent;