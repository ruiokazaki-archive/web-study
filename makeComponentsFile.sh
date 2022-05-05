#!/bin/bash

echo "\n========コンポーネントを作成します========\n"

COMPONENTS_DIR='src/components'
if [ ! -d $COMPONENTS_DIR ];then
  mkdir $COMPONENTS_DIR
fi

echo '📝 コンポーネントの種類を入力してください'
PS3='(number): '
select GENRE in 'ui-elements' 'ui-parts'
do
  if [ ! -d $COMPONENTS_DIR/$GENRE ];then
    echo ✅ $GENRE ディレクトリを作成しました。
    mkdir $COMPONENTS_DIR/$GENRE
  fi
  break
done

echo '\n📝 コンポーネント名を入力してください(例: Button): '
read COMPONENTS_NAME
echo ''
if [ -d $COMPONENTS_DIR/$GENRE/$COMPONENTS_NAME ];then
  echo ❌ $COMPONENTS_NAME ディレクトリが存在します。最初からやり直してください。
  exit 1
fi
mkdir $COMPONENTS_DIR/$GENRE/$COMPONENTS_NAME

cat <<EOF > $COMPONENTS_DIR/$GENRE/$COMPONENTS_NAME/index.tsx
import { VFC } from 'react';

type Props = {};

const $COMPONENTS_NAME: VFC<Props> = ({  }) => {

  return (
    <></>
  )
};
export default $COMPONENTS_NAME;
EOF
echo ✅ $COMPONENTS_NAME/index.tsx を作成しました

cat <<EOF > $COMPONENTS_DIR/$GENRE/$COMPONENTS_NAME/$COMPONENTS_NAME.stories.tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';

import $COMPONENTS_NAME from './index';

export default {
  title: '$GENRE/$COMPONENTS_NAME',
  component: $COMPONENTS_NAME,
} as ComponentMeta<typeof $COMPONENTS_NAME>;

export const Default1: ComponentStory<typeof $COMPONENTS_NAME> = () => (
  <$COMPONENTS_NAME></$COMPONENTS_NAME>
);
EOF
echo ✅ $COMPONENTS_NAME/$COMPONENTS_NAME.stories.tsx を作成しました