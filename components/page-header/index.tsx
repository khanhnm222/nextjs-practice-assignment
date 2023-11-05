interface PageHeaderProps {
  title: string;
  subHeader: string;
  backgroundImage: string;
  detailPage?: boolean;
  author?: string;
  createdDate?: string;
}

const PageHeader = ({
  title,
  subHeader,
  backgroundImage,
  detailPage = false,
  author,
  createdDate,
}: PageHeaderProps) => {
  return (
    <>
      {!detailPage ? (
        <header className="absolute top-0 z-0 w-full bg-cover bg-center min-h-[400px] text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="flex items-center justify-center h-full w-full min-h-[400px]">
            <div className="text-center">
              <div className="site-heading">
                <h1 className="text-[50px]">{title}</h1>
                <hr className="small text-white" />
                <span className="font-light text-[20px]">{subHeader}</span>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header className="intro-header absolute top-0 z-0 w-full bg-cover bg-center min-h-[400px] text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div className="post-heading">
                  <h1 className="text-[50px]">{title}</h1>
                  <h2 className="subheading">{subHeader}</h2>
                  <span className="meta">Posted by <a href="#">{author}</a> on {createdDate}</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  )
}

export default PageHeader