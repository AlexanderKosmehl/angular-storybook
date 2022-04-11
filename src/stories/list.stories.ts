import { Meta, Story } from '@storybook/angular/types-6-0';
import { ListComponent } from 'src/app/list/list.component';

export default {
  title: 'Schmauzl/List',
  component: ListComponent
} as Meta

const Template: Story<ListComponent> = (args: ListComponent) => ({
  props: args
})

export const Five = Template.bind({})
Five.args = {
  listElements: ['Hallo', 'Welt!', 'I', 'Hate', 'Angular']
}

export const Seven = Template.bind({})
Seven.args = {
  listElements: new Array(7).fill('I hate angular')
}