import React from 'react';
import styled from 'styled-components';

import { Style } from 'theme';

const Wrapper = styled.div<Style>`
  width: 100%;
  font-size: 16px;
  color: ${props => props.theme.text};
}`;

export const Paragraph: React.FC<{}> = () => {
  return (
    <Wrapper>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices, nunc in sodales dapibus, nibh nunc tincidunt diam, non ornare lectus quam id turpis. Sed vitae molestie dui. Nulla a neque eu purus sollicitudin dignissim. Nam pretium elementum est, sit amet hendrerit ex faucibus quis. Curabitur vulputate semper posuere. Fusce in rhoncus magna, sed elementum ipsum. Curabitur diam ipsum, ultrices a eleifend rutrum, bibendum in urna. Donec feugiat massa eu pharetra finibus. Morbi dignissim ullamcorper enim a aliquam. Cras ac faucibus velit. Vivamus pulvinar justo dui, eget iaculis ipsum sodales a.<br/><br/>
      Sed ac nunc et ligula pharetra elementum. Nunc sagittis nisl quis mauris rutrum bibendum. Pellentesque ornare arcu eget tellus tincidunt ultricies. Phasellus egestas venenatis euismod. In rhoncus nisl ac lacus sollicitudin, vitae imperdiet nisl facilisis. Donec volutpat lacus ex, at elementum lorem semper et. Nulla viverra metus at malesuada lobortis. In congue eu mauris non tristique. Phasellus a leo quis lectus blandit condimentum. Nulla tincidunt mattis tincidunt.<br/><br/>
      Vivamus rhoncus rutrum ornare. Integer faucibus consequat turpis, vel vestibulum mauris blandit volutpat. In a nisl ut sem sollicitudin cursus. Praesent dapibus risus felis, eu accumsan tellus gravida nec. Nullam luctus congue tincidunt. Maecenas scelerisque tincidunt vehicula. Maecenas hendrerit venenatis nibh sed laoreet. Nunc sodales tristique laoreet.<br/>
    </Wrapper>
  )
}