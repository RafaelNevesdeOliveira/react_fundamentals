import styles from './Avatar.module.css'
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
}

//...props para pegarmos todas as propriedades da TAG img em questão e nao precisarmos ficar adicionando propriedades sempre que possível
export function Avatar({hasBorder = true, ...props}:AvatarProps ){
  return(
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    {...props}
    />
  )
}