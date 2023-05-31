import './App.css';
import MUITypography from './Components/MUITypography/MUITypography.jsx';
import MUIButton from './Components/MUIButton/MUIButton.tsx';
import MUITextField from './Components/MUITextField.jsx';
import MUISelect from './Components/MUISelect.tsx';
import MUIRadio from './Components/MUIRadio.tsx';
import MUICheckBox from './Components/MUICheckBox.tsx';
import MUISwitch from './Components/MUISwitch.tsx';
import MUIRating from './Components/MUIRating.tsx';
import MUIAutoComplete from './Components/MUIAutoComplete.tsx';
import MUIGrid from './Components/MUIGrid.tsx';
import MUICard from './Components/MUICard.tsx';
import MUIAccordion from './Components/MUIAccordion.tsx';
import MUINavBar from './Components/MUINavBar.tsx';
// import MUILink from './Components/MUILink.tsx';
import MUIBreadcrumbs from './Components/MUIBreadcrumbs.tsx';
import MUIDrawer from './Components/MUIDrawer.jsx';
import MUISpeedDial from './Components/MUISpeedDial.jsx';
import MUIBottomNav from './Components/MUIBottomNav.jsx';
import MUIAvatar from './Components/MUIAvatar.jsx';
import MUIBadge from './Components/MUIBadge';
import MUIList from './Components/MUIList.jsx';
import MUIChip from './Components/MUIChip.jsx';
import MUITooltip from './Components/MUITooltip.jsx';
import MUIAlert from './Components/MUIAlert.jsx';
import MUIDialog from './Components/MUIDialog.jsx';
import MUIProgresses from './Components/MUIProgresses.jsx';

function App() {
  return (
    <div className="App">
      <MUINavBar />
      {/* <MUILink /> */}
      <MUIBreadcrumbs />
      <hr />
      <MUIDrawer />
      <hr />
      <MUITypography />
      <hr />
      <MUIButton />
      <hr />
      <MUITextField />
      <hr/>
      <MUISelect /> {/*drop down list*/}
      <hr/>
      <MUIRadio />
      <hr /> 
      <MUICheckBox />
      <hr />
      <MUISwitch />
      <hr />
      <MUIRating />
      <hr />
      <MUIAutoComplete />
      <hr />
      <MUIGrid />
      <hr />
      <MUICard />
      <hr />
      <MUIAccordion />
      <hr />
      <MUISpeedDial />
      {/* <hr /> */}
      <MUIAvatar />
      <hr />
      <MUIBadge />
      <hr />
      <MUIList />
      <hr />
      <MUIChip />
      <hr />
      <MUITooltip />
      <hr />
      <MUIAlert />
      <hr />
      <MUIDialog />
      <hr />
      <MUIProgresses />
      <hr />
      
      <hr />
      <MUIBottomNav />
    </div>
  );
}

export default App;

// installing the Material UI library ...
// npm install @mui/material @emotion/react @emotion/styled
// In package.json dependencies you should had : "@mui/material": "^5.13.2",