import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import  Grid from '@material-ui/core/Grid';
import  ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import {getShowDetail} from '../api/apiService'; 

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop:30
    },
    image: {
        width: 328,
        height: 328,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

function ShowDetail() {

    const classes = useStyles();

    let {id} = useParams();

    const [loading, setLoading] = React.useState(false);

    const [data, setData] = React.useState();

    useEffect(() => {
        setLoading(true);
        getShowDetail(id)
            .then(data => {
                // console.log(data);
                setLoading(false);
                setData(data);
            });
    },[]);

    return(
        <Paper className={classes.paper}>
            
            {!data && !loading && <div>No Data</div>}
            {!data && loading && <CircularProgress />}
            {data  &&
                <Grid container spacing={2} cols={6}>
                    {console.log(data)}
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={(data.image !== null && data.image.medium !== null)? data.image.medium : null} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h2">
                                    {data.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Rating: {data.rating.average !== null ? data.rating.average : 0}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Type: {data.type !== null ? data.type : '' }                              </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Language: {data.language !== null ? data.language : ''}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Genres: {data.genres.length > 0 ? data.genres.join(",") : ''}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Premiered: {data.premiered !== null ? data.premiered : ''}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Schedule: Time - {data.schedule.time !== null ? data.schedule.time : '00:00'}, 
                                    {data.schedule.days.length > 0 ? data.schedule.days.join(",") : ''}
                                </Typography>

                                <p dangerouslySetInnerHTML={{ __html: data.summary !== null ? data.summary : 'No summary' }} />

                                <Typography variant="body2" color="textSecondary">
                                    Official Site: <a href={data.officialSite !== null ? data.officialSite : ''} target="_blank" rel="noopener noreferrer">
                                        {data.officialSite !== null? data.officialSite : 'No Official Site'}
                                        </a>
                                </Typography>

                                <Typography variant="body2" color="textSecondary">
                                    Network: {data.network !== null ? data.network.name : 'No Network'}, 
                                     {data.network !== null ? data.network.country.name : 'No Country name'}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <a href={data.url !== null ? data.url: ''} target="_blank" rel="noopener noreferrer">For More Info</a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </Paper>
    )
}

export default ShowDetail;