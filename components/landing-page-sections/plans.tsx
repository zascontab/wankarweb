import Link from "next/link";
import Plan from "./plan";
import { IPlan } from '../../interfaces';

interface PlanFeatures {
    headline: string,
    subheadline: string,
    plans: IPlan[],
    scrollAnchorId: string
}

export default function Plans({ headline, subheadline, plans, scrollAnchorId }: PlanFeatures) {
    return (
        <section id={scrollAnchorId} className="plan-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="section-title text-center">
                            <h2>{headline}</h2>
                            <p>{subheadline}</p>
                            {/* <p>
                                <Link href={`/blog`}>
                                    <a
                                        className="main-btn btn-hover mt-5">View All Blog Posts
                                    </a>
                                </Link>
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {plans.map(p => <Plan
                        key={p.slug}
                        published={p.published}
                        slug={p.slug}
                        title={p.title}
                        summary={p.summary}
                        description={p.description}
                        price={p.price}
                    />)}
                </div>
            </div>
        </section>
    )
}