import React, { isValidElement, useRef, useEffect } from 'react';
import useBrokenLinks from './useBrokenLinks';
import { useHistory } from '@docusaurus/router';
import styles from './styles.module.css';

function getText(node) {
  let curNode = node;
  while (isValidElement(curNode)) {
    [curNode] = React.Children.toArray(curNode.props.children);
  }
  return curNode;
}

function APITableRow({ name, children }, ref) {
  const entryName = getText(children);
  const id = name ? `${name}-${entryName}` : entryName;
  const anchor = `#${id}`;
  const history = useHistory();
  useBrokenLinks().collectAnchor(id);
  return (
    <tr
      id={id}
      tabIndex={0}
      ref={history.location.hash === anchor ? ref : undefined}
      onClick={(e) => {
        const isLinkClick = e.target.tagName.toUpperCase() === 'A';
        if (!isLinkClick) {
          history.push(anchor);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          history.push(anchor);
        }
      }}
    >
      {children.props.children}
    </tr>
  );
}

const APITableRowComp = React.forwardRef(APITableRow);

export default function APITable({ children, name }) {
  const [thead, tbody] = React.Children.toArray(children.props.children);
  const highlightedRow = useRef < HTMLTableRowElement > null;
  useEffect(() => {
    highlightedRow.current?.focus();
  }, [highlightedRow]);
  const rows = React.Children.map(tbody.props.children, (row) => (
    <APITableRowComp name={name} ref={highlightedRow}>
      {row}
    </APITableRowComp>
  ));

  return (
    <table className={styles.apiTable}>
      {thead}
      <tbody>{rows}</tbody>
    </table>
  );
}
