import "./style.css";
import { Collapse } from "antd";

function PostList(params) {
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <>
      <div className="post-list">
        <div className="post-list_title">
          <p>PostTitle</p>
        </div>
        <div className="post-list_author">
          <div>
            <p>Author:XXX</p>
            <p>CreateAt:XXX</p>
          </div>
        </div>
        <div className="post-list_content">
          <p>
            LoremIpFugiat magna aliquip qui occaecat dolor dolore adipisicing
            irure et nostrud.sum
          </p>
        </div>
        <div className="post-list_comment">
          <Collapse>
            <Panel header="2repliess" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
}
export default PostList;
