import React from 'react';
import { Container, Content, Text } from 'native-base';
import HTMLView from 'react-native-htmlview';
import { View, WebView } from 'react-native';

class ModelView extends React.PureComponent {
	static navigationOptions = {
		title: 'Modelo'
	};

	renderNode(node, index, siblings, parent, defaultRenderer) {
		if (node.name == 'iframe') {
			const a = node.attribs;
			const iframeHtml = `<iframe src="${a.src}"></iframe>`;
			return (
				<View
					key={index}
					style={{ width: Number(a.width), height: Number(a.height) }}
				>
					<WebView source={{ html: iframeHtml }} />
				</View>
			);
		}
	}

	render() {
		const { navigation } = this.props;
		const model = navigation.getParam('model');

		return (
			<Container>
				<Content>
					<Text>Teste</Text>
					<HTMLView
						value={`
							<div>
								<iframe width="200" height="200" 
									src="https://sketchfab.com/models/313153cc18b241289ff76f02aed6e0f2/embed" 
									frameborder="0" allow="autoplay; fullscreen; vr"
									mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
							</div>
						`}
					/>
					<Text>Teste 2</Text>
				</Content>
			</Container>
		);
	}
}

export default ModelView;
