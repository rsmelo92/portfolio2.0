import clsx from "clsx";
import classes from './Blocks.module.css';

type SmallBlockProps = { 
  title?: string
  image?: string
  width?: number
}

export const SmallBlock = ({ 
  title, 
  image,
  width = 52,
}: SmallBlockProps) =>  (
  <div className={clsx(classes.gridBoxSmall, classes.box)}>
    <img width={width} src={image} />
    <p>{title}</p>
  </div>
);


type SmallDoubleBlockProps = { 
  title?: string
  image?: string
  width?: number
}

export const SmallDoubleBlock = ({ 
  title, 
  image,
  width = 216,
}: SmallDoubleBlockProps) =>  (
  <div className={clsx(classes.gridDoubleBoxSmall, classes.box)}>
    <img width={width} src={image} />
    <p>{title}</p>
  </div>
);

type BigBlockProps = {
  image?: string
  width?: number}

export const BigBlock = ({ 
  image,
  width = 500,
}: BigBlockProps) => {
  return (
    <div className={clsx(classes.bigBlock, classes.box)}>
      <img width={width} src={image} />
    </div>
  )
}
