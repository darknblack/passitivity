import cx from 'classNames';

interface LandingPageFeaturesProps {
  header: string;
  body: string;
  img: string;
  isTextLeft?: boolean;
}

function Features(props: LandingPageFeaturesProps) {
  const { header, body, img, isTextLeft = true } = props;
  return (
    <section className={cx('w-full text-gray-800 py-16 bg-gradient-to-r from-gray-100 to-gray-200')}>
      <div className="lg:w-lg grid grid-cols-5 gap-x-10 grid-row-1 mx-auto">
        <div className={cx('col-span-3 flex flex-col justify-center')}>
          <div className="text-4xl font-extrabold mb-8">{header}</div>
          <p className="text-xl">{body}</p>
        </div>
        <div
          className={cx('col-span-2', {
            'order-first': isTextLeft,
          })}
        >
          <img src={img} className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default Features;
