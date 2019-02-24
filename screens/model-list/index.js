import React from 'react';
import {
	Container,
	Content,
	List,
	ListItem,
	Text,
	Left,
	Right,
	Icon
} from 'native-base';
import models from '../../lib/fixtures/models';

class ModelList extends React.PureComponent {
	static navigationOptions = {
		title: 'Modelos'
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Content>
					<List>
						{models.map(model => (
							<ListItem
								key={model.key}
								onPress={() => navigate('ModelView', { model })}
							>
								<Left>
									<Text>{model.name}</Text>
								</Left>
								<Right>
									<Icon name="arrow-forward" />
								</Right>
							</ListItem>
						))}
					</List>
				</Content>
			</Container>
		);
	}
}

export default ModelList;
