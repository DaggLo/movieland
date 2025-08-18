import { Link, useRouteError } from "react-router";

import { cn, ErrorImage, type RejectedDataType } from "@shared";

const block = cn('fallback');

export const Fallback = () => {
  const error = useRouteError();
  const knownError = error as RejectedDataType;

  return (
    <div role='alert' className={block(null)}>
      <img src={ErrorImage} alt="Error Image" className={block('image')} />
      <h1 className={block('title')}>Something went wrong</h1>
      <span className={block('description')}>
        {knownError?.messageError} {knownError?.status}
      </span>
      <Link to='/' className={block('link')}>
        Go to home page
      </Link>
    </div>
  )
}