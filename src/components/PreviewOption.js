const PreviewOption = ({imageSrc, setPrevSrc}) => {
   // props.imageSrc
   //const {imageSrc} = props;
   const imgClickHandler = () => {
    setPrevSrc(imageSrc);
   }
  return (
    <img src={imageSrc} onClick={imgClickHandler} />
  )
}

export default PreviewOption;