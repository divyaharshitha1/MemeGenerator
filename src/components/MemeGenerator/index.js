import {Component} from 'react'
import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  MemeGeneratorColumn,
  FormAndMemeContainer,
  MemeContainer,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  GenerateButton,
  TextContent,
  CustomSelect,
  CustomOption,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeBgImg = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTxt = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: fontSizeOptionId,
    })
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state
    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  renderMemeGeneratorForm = () => {
    const {
      fontSizeOptionId,
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state
    return (
      <MemeGeneratorColumn>
        <Heading>Meme Generator</Heading>
        <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
          <CustomLabel htmlFor="backgroundImage">Image URL</CustomLabel>
          <CustomInput
            id="backgroundImage"
            placeholder="Enter the Image URL"
            value={backgroundImageUrlInput}
            onChange={this.onChangeBgImg}
          />
          <CustomLabel htmlFor="topText">Top Text</CustomLabel>
          <CustomInput
            id="topText"
            placeholder="Enter the Top Text"
            value={topTextInput}
            onChange={this.onChangeTopText}
          />
          <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
          <CustomInput
            id="bottomText"
            placeholder="Enter the Bottom Text"
            value={bottomTextInput}
            onChange={this.onChangeBottomTxt}
          />
          <CustomLabel htmlFor="select">Font Size</CustomLabel>
          <CustomSelect
            id="select"
            value={fontSizeOptionId}
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(eachValue => (
              <CustomOption key={eachValue.optionId} value={eachValue.optionId}>
                {eachValue.displayText}
              </CustomOption>
            ))}
          </CustomSelect>
          <GenerateButton type="submit">Generate</GenerateButton>
        </MemeGeneratorForm>
      </MemeGeneratorColumn>
    )
  }

  render() {
    return (
      <AppContainer>
        <ResponsiveContainer>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </FormAndMemeContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
