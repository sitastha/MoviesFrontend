import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Typography } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import {Link} from 'react-router-dom';
import pop from './Images/pop.jpg'
import { positions } from '@material-ui/system';

import {movies, searchMovie} from '../api/apiService';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        textAlign:'center',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        color:'#4a979e',
        "&:hover": {
            color: "green",
            fontSize: '27rem',
            padding: 24
        
            
        }
   
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    searchButton: {
        display:'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        position:'absolute',
        zIndex: 1,
        top:-16,
        padding:20
        
    },
    imageHolder: {
       position: 'relative',
       
    },

   input: {

    color:'#fff',
    padding:10,
    marginLeft:30,
    fontSize: 20,

    },

}));

function Home(props){

    const classes = useStyles();

    const [loading, setLoading] = React.useState(false);

    const [data, setData] = React.useState([]);

    useEffect(() => {
        setLoading(true);
        let isCurrent = true;
        movies()
        .then(data => {
            if(isCurrent){
                console.log(data);
                setData(data);
                setLoading(false);
            }
        });
        return () => isCurrent = false;
    },[data])

    const onHandleSearch = () => {
        setLoading(true);
        movies()
        .then(data => {
            console.log(data);
            setLoading(false);
            setData(data);
        });
    };

    const onTextChange = (e) => {
        setLoading(true);
        searchMovie(e.target.value)
        .then(data => {
            console.log(data);
            setLoading(false);
            setData(data);
        });
    }

    return(
            <div className={classes.root}>
                <div className={classes.searchButton}>
                <Button
                     padding={10}
                    variant="contained"
                    top={60}
                    onClick={onHandleSearch}>
                    Search
                </Button>
                <InputBase
                    color="#fff"
                    onChange={onTextChange}
                    className={classes.input}
                    placeholder="TYPE THE MOVIE"
                    inputProps={{ 'aria-label': 'search' }}
                />
                </div>
                {data.length === 0 && !loading && <div cols={4}>
                    <div className={classes.imageHolder}>
                            <Typography variant="h3" gutterBottom>
                                WELCOME TO THE MOVIES WORLD
                            </Typography>
                    
                          
                     </div>
                 </div>}
                {data.length === 0 && loading && <CircularProgress />}
                {data.length > 0 && <GridList cellHeight={250} cols={4} className={classes.gridList}>
                    
                   
                    { data.map(item => (
                        
                        <GridListTile key={item.id}>
                            <img src={item.image !== null ? item.image : null} alt={item.name} />
                            <Link to={`/show/${item.id}`}>
                            <GridListTileBar
                                title={item.name}
                                actionIcon={
                                    <IconButton aria-label={`info about ${item.name}`} className={classes.icon}>
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                            </Link>
                        </GridListTile>
                    
                    ))}
                </GridList>}
            </div>
    );
}

export default Home;