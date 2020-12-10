import React from 'react';

const Imagen = ({imagen}) => {
	const{largeImageURL, likes, previewURL, tags, views, favorites, downloads} =imagen
	return ( 
		<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
			<div className="card">
				<img src={previewURL} alt={tags} className="card-img-top" />
				<div className="card-body">
					<p className="card-text">{likes} Likes </p>
					<p className="card-text">{views} Views </p>
					<p className="card-text">{favorites} Favorites </p>
					<p className="card-text">{downloads} Downloads </p>
				</div>
				<div className="card-footer">
					< a 
						href={largeImageURL}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-primary btn-block"> See Image </a>
				</div>
			</div>
		</div>
	 );
}
 
export default Imagen;