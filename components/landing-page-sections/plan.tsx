import Image from 'next/image';
import Link from 'next/link';
import { IPlan } from '../../interfaces';

export default function Plan({
    title,
    summary,
    slug,
    featuredImage,
    featuredImageAlt,
    description,
    price
}: IPlan) {
    return (
        <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-plan">
                {featuredImage && (
                    <div className="plan-header">
                        <Image
                            src={featuredImage}
                            alt={featuredImageAlt}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                )}
                <div className="plan-body d-flex align-items-center flex-column ">
                    <h3>
                        {title}
                    </h3>
                    <br />
                    <div className='d-flex align-items-center'>
                        <h2>
                            ${price}
                        </h2>
                        <h3>
                            /m
                        </h3>
                    </div>
                    <ul>
                        {description.map((d, i) => (
                            <li key={i}>{d}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}