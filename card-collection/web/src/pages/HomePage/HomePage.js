import {createUseStyles} from "react-jss";
import HomepageCardCell from 'src/components/HomepageCardCell';
const useStyles = createUseStyles({
  root: {
    fontFamily: "'Lato', sans-serif"
  }
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Paul's Baseball Card Collection</h1>
      <HomepageCardCell/>
    </div>
  )
}

export default HomePage
