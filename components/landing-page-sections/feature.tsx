import Image from "next/image"
import { PageFeature } from "../../interfaces"

export default function Feature({ headline, description, icon }: PageFeature) {
	return (
		<div className="col-lg-6 col-md-6">
			<div className="single-feature">
				<div className="feature-icon">
					{icon && <Image src={icon}
						layout="fill"
						objectFit="cover"
						alt=""
					/>}
				</div>
				<div className="feature-content">
					<h4>{headline}</h4>
					<p>{description}</p>
				</div>
			</div>
		</div>
	)
}