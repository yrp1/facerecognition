import React from "react"
import "./ImageLinkForm.css"

const ImageLinkForm = ({onInputChange,onSubmit}) =>{
	return(<div>
			<p className="f3">
				{"This Magic Brain will detect faces in your pictures. Give it a try..."} 
			</p>
				<div className="center">
					<div className=" fan center pa4 br-3 shadow-2">
						<input 
							className="f4 w-70 center"
							type="text" 
							placeholder="link(.jpg)"
							onChange={onInputChange}
							/>
						<button 
							className=" ml3 w-30 grow f4 link ph3 pv2 dib white "
							onClick={onSubmit}> Detect 
						</button>
					</div>
				</div>
		</div>
		)
}

export default ImageLinkForm