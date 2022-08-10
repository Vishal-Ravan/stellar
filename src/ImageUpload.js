
import Button from '@material-ui/core/Button';
import React from "react";
import ImageUploading from "react-images-uploading";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    BtnBorder: {
        border: '2px solid #E5E5E5',
        backgroundColor: 'white',
        marginRight: '3px'
    },
    ImageUploadCompo: {
        color: '#303186',
        fontSize: '14px',
        fontWeight: '600',
        padding: '0',
        margin: '0',
        // width:'112px',
        '& p': {
            padding: '0',
            margin: '0'
        }
    },
    divReverse: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: "start",
        marginLeft: '-4px',
        margin: '0'
    }
}))

export default function App() {
    const classes = useStyles()
    const [images, setImages] = React.useState([]);
    // const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div>
            <ImageUploading
                // multiple
                value={images}
                onChange={onChange}
                // maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    //   onImageRemoveAll,
                    //   onImageUpdate,
                    //   onImageRemove,
                    isDragging,
                    dragProps
                }) => (
                    // write your building UI
                    <div className={classes.divReverse}>
                        <img
                            id="img-first"
                            src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-0/p526x296/194831030_2276556445809080_7739555777274001235_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=t2m-L0L1nqAAX_wWraw&tn=LwcWzizvS1oBz1Yg&_nc_ht=scontent-hkt1-1.xx&tp=6&oh=74e3be5137a21c3f8548f9ac727dcc03&oe=60CB7686"
                            alt=""
                            width="100"
                        />
                        {imageList.map(
                            (image, index) => (
                                (document.getElementById("img-first").style.display = "none"),
                                (
                                    <div key={index} className={classes.ImageUploadCompo}>
                                        <img src={image.data_url} alt="" width="100" />
                                        <div className="image-item__btn-wrapper">
                                        </div>
                                    </div>
                                )
                            )
                        )}
                        <Button className={classes.BtnBorder}
                            style={isDragging ? { color: "red" } : null}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            <p className={classes.ImageUploadCompo}>
                                Upload Program Image
                            </p></Button>
                        &nbsp;
                        {/* <button
              onClick={() => {
                onImageRemoveAll(), hideImg();
              }}
            >
              Remove all images
            </button> */}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}
