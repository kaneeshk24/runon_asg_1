import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import {
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const MacBookAir: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white h-[832px] overflow-hidden text-left text-sm text-white font-inter">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1280px] h-[832px]" />
      <div className="absolute top-[0px] left-[0px] bg-darkslategray w-[1280px] h-[832px]" />
      <input
        className="m-0 absolute top-[254px] left-[40px] w-[244px] h-[15px]"
        type="checkbox"
      />
      <div className="absolute top-[64px] left-[32px] text-[22px] font-semibold inline-block w-[202px] h-[23px]">
        COURSES (677)
      </div>
      <div className="absolute top-[34px] left-[319.5px] box-border w-0.5 h-[755px] border-r-[2px] border-solid border-white" />
      <input
        className="[border:none] [outline:none] font-semibold font-inter text-[24px] bg-gray-200 absolute top-[81px] left-[352px] w-[796px] h-[57px] py-3.5 px-12 box-border text-white"
        placeholder="Most popular courses under 50k"
        type="text"
      />
      <Accordion
        className="absolute top-[131px] left-[12px]"
        w="121px"
        allowToggle
      >
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" />
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} />
        </AccordionItem>
      </Accordion>
      <Dropdown
        className="absolute top-[131px] left-[139px]"
        overlay={
          <Menu>
            {([] as any).map((option: any, index: number) => (
              <Menu.Item key={index}>
                <a onClick={(e) => e.preventDefault()}>{option.value || ""}</a>
              </Menu.Item>
            ))}
          </Menu>
        }
        trigger={["hover"]}
      >
        <Button onClick={(e) => e.preventDefault()}>
          {`Sort by `}
          <DownOutlined />
        </Button>
      </Dropdown>
      <div className="absolute top-[181.5px] left-[4.5px] box-border w-[300px] h-px border-t-[1px] border-solid border-white" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[214px] left-[40px] w-[244px] h-[23px]">
        <div className="absolute top-[0px] left-[0px] text-lg font-medium font-inter text-white text-left inline-block w-[195px] h-[23px]">
          Course duration
        </div>
        <img
          className="absolute top-[3px] left-[226px] w-[18px] h-[17px] object-contain"
          alt=""
          src="/keyboard-arrow-down@2x.png"
        />
      </button>
      <input
        className="m-0 absolute top-[279px] left-[40px] w-[244px] h-[15px]"
        type="checkbox"
      />
      <input
        className="m-0 absolute top-[304px] left-[40px] w-[244px] h-[15px]"
        type="checkbox"
      />
      <input
        className="m-0 absolute top-[329px] left-[40px] w-[244px] h-[15px]"
        type="checkbox"
      />
      <div className="absolute top-[365.5px] left-[4.5px] box-border w-[300px] h-px border-t-[1px] border-solid border-white" />
      <span className="absolute top-[427px] left-[40px] w-[221px] h-[18px]">
        <div className="absolute top-[2px] left-[0px] w-[221px] h-3.5">
          <div className="absolute top-[0px] left-[115px] font-medium inline-block w-[106px] h-3.5">
            <span>{`4.5 & up `}</span>
            <span className="text-gainsboro">(6378)</span>
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro w-3.5 h-3.5" />
        </div>
        <img
          className="absolute top-[0px] left-[25px] w-[84px] h-[18px] object-cover"
          alt=""
          src="/group-1412@2x.png"
        />
      </span>
      <span className="absolute top-[455px] left-[40px] w-[221px] h-[18px]">
        <div className="absolute top-[2px] left-[0px] w-[221px] h-3.5">
          <div className="absolute top-[0px] left-[115px] font-medium inline-block w-[106px] h-3.5">
            <span>{`4.5 & up `}</span>
            <span className="text-gainsboro">(6378)</span>
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro w-3.5 h-3.5" />
        </div>
        <img
          className="absolute top-[0px] left-[25px] w-[84px] h-[18px] object-cover"
          alt=""
          src="/group-1412@2x.png"
        />
      </span>
      <span className="absolute top-[483px] left-[40px] w-[221px] h-[18px]">
        <div className="absolute top-[2px] left-[0px] w-[221px] h-3.5">
          <div className="absolute top-[0px] left-[115px] font-medium inline-block w-[106px] h-3.5">
            <span>{`4.5 & up `}</span>
            <span className="text-gainsboro">(6378)</span>
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro w-3.5 h-3.5" />
        </div>
        <img
          className="absolute top-[0px] left-[25px] w-[84px] h-[18px] object-cover"
          alt=""
          src="/group-1412@2x.png"
        />
      </span>
      <span className="absolute top-[511px] left-[40px] w-[221px] h-[18px]">
        <div className="absolute top-[2px] left-[0px] w-[221px] h-3.5">
          <div className="absolute top-[0px] left-[115px] font-medium inline-block w-[106px] h-3.5">
            <span>{`4.5 & up `}</span>
            <span className="text-gainsboro">(6378)</span>
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro w-3.5 h-3.5" />
        </div>
        <img
          className="absolute top-[0px] left-[25px] w-[84px] h-[18px] object-cover"
          alt=""
          src="/group-1412@2x.png"
        />
      </span>
      <span className="absolute top-[539px] left-[40px] w-[221px] h-[18px]">
        <div className="absolute top-[2px] left-[0px] w-[221px] h-3.5">
          <div className="absolute top-[0px] left-[115px] font-medium inline-block w-[106px] h-3.5">
            <span>{`4.5 & up `}</span>
            <span className="text-gainsboro">(6378)</span>
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro w-3.5 h-3.5" />
        </div>
        <img
          className="absolute top-[0px] left-[25px] w-[84px] h-[18px] object-cover"
          alt=""
          src="/group-1412@2x.png"
        />
      </span>
      <select className="absolute top-[385px] left-[40px] bg-[transparent] [border:none] w-[244px] h-[23px] font-inter font-medium text-lg text-white" />
      <div className="absolute top-[580.5px] left-[4.5px] box-border w-[300px] h-px border-t-[1px] border-solid border-white" />
      <select className="absolute top-[593px] left-[5px] bg-[transparent] [border:none] w-[299px] h-9 pt-0 px-[35px] pb-[13px] box-border font-inter font-medium text-lg text-white" />
      <select className="absolute top-[641px] left-[5px] bg-[transparent] [border:none] w-[299px] h-9 pt-0 px-[35px] pb-[13px] box-border font-inter font-medium text-lg text-white" />
      <select className="absolute top-[689px] left-[5px] bg-[transparent] [border:none] w-[299px] h-9 pt-0 px-[35px] pb-[13px] box-border font-inter font-medium text-lg text-white" />
      <ul className="m-0 absolute top-[182px] left-[352px] w-[907px] h-[230px]">
        <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[386px] h-[230px]" />
        <div className="absolute top-[59px] left-[402px] font-medium inline-block w-[505px] h-[37px]">
          Become confident public speaker and deiver engaging presentation be
          more professional improve confidence hg dgg dn
        </div>
        <div className="absolute top-[22px] left-[402px] text-xl font-semibold inline-block w-[505px] h-[23px]">
          Course Introduction - Social skill for Success
        </div>
        <div className="absolute top-[100px] left-[402px] text-xs inline-block w-[505px] h-[15px]">
          Name of Author
        </div>
        <div className="absolute top-[119px] left-[402px] w-[163px] h-[18px] text-gainsboro">
          <img
            className="absolute top-[0px] left-[26px] w-[84px] h-[18px] object-cover"
            alt=""
            src="/group-1412@2x.png"
          />
          <div className="absolute top-[1px] left-[113px] font-medium inline-block w-[50px] h-3.5">
            (6378)
          </div>
          <div className="absolute top-[1px] left-[0px] font-medium text-white inline-block w-[23px] h-4">
            4.5
          </div>
        </div>
        <div className="absolute top-[141px] left-[402px] whitespace-pre-wrap inline-block w-[505px] h-[18px]">
          2 Levels 34 modules 562 lessons 5.7 hrs
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[173px] left-[402px] w-[105px] h-[30px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-200 box-border w-[105px] h-[30px] border-[1px] border-solid border-white" />
          <div className="absolute top-[7px] left-[2px] text-xs font-medium font-inter text-white text-center inline-block w-[101px] h-[18px]">
            Bestseller
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[175px] left-[112px] w-[161px] h-[25px]">
          <div className="absolute top-[0px] left-[0px] bg-firebrick w-[161px] h-[25px]" />
          <div className="absolute top-[6px] left-[4px] text-3xs font-semibold font-inter text-white text-center inline-block w-[153px]">{`Buy this course `}</div>
        </button>
        <div className="absolute top-[200px] left-[63px] text-5xs font-medium text-center inline-block w-[260px]">
          Subscription starts at 673/hrs
        </div>
      </ul>
      <div className="absolute top-[443px] left-[352px] w-[907px] h-[230px]">
        <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[386px] h-[230px]" />
        <div className="absolute top-[47px] left-[402px] w-[505px] h-[137px]">
          <div className="absolute top-[37px] left-[0px] font-medium inline-block w-[505px] h-[37px]">
            Become confident public speaker and deiver engaging presentation be
            more professional improve confidence hg dgg dn
          </div>
          <div className="absolute top-[0px] left-[0px] text-xl font-semibold inline-block w-[505px] h-[23px]">
            Course Introduction - Social skill for Success
          </div>
          <div className="absolute top-[78px] left-[0px] text-xs inline-block w-[505px] h-[15px]">
            Name of Author
          </div>
          <div className="absolute top-[97px] left-[0px] w-[163px] h-[18px] text-gainsboro">
            <img
              className="absolute top-[0px] left-[26px] w-[84px] h-[18px] object-cover"
              alt=""
              src="/group-1412@2x.png"
            />
            <div className="absolute top-[1px] left-[113px] font-medium inline-block w-[50px] h-3.5">
              (6378)
            </div>
            <div className="absolute top-[1px] left-[0px] font-medium text-white inline-block w-[23px] h-4">
              4.5
            </div>
          </div>
          <div className="absolute top-[119px] left-[0px] whitespace-pre-wrap inline-block w-[505px] h-[18px]">
            2 Levels 34 modules 562 lessons 5.7 hrs
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[175px] left-[112px] w-[161px] h-[25px]">
          <div className="absolute top-[0px] left-[0px] bg-firebrick w-[161px] h-[25px]" />
          <div className="absolute top-[6px] left-[4px] text-3xs font-semibold font-inter text-white text-center inline-block w-[153px]">{`Buy this course `}</div>
        </button>
        <label className="cursor-pointer absolute top-[9px] left-[5px] w-6 h-6">
          <img
            className="absolute h-3/4 w-[58.33%] top-[12.5%] right-[20.83%] bottom-[12.5%] left-[20.83%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bookmark.svg"
          />
        </label>
      </div>
      <div className="absolute top-[643px] left-[414px] text-5xs font-medium text-center inline-block w-[260px]">
        Buy this course for $ 6773
      </div>
      <label className="cursor-pointer absolute top-[92px] left-[1158px] w-[34px] h-[34px]">
        <img
          className="absolute h-3/4 w-[58.24%] top-[12.65%] right-[20.88%] bottom-[12.35%] left-[20.88%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/bookmark1.svg"
        />
      </label>
      <label className="cursor-pointer absolute top-[188px] left-[357px] w-6 h-6">
        <img
          className="absolute h-3/4 w-[58.33%] top-[12.5%] right-[20.83%] bottom-[12.5%] left-[20.83%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/bookmark.svg"
        />
      </label>
      <img
        className="absolute top-[643px] left-[266px] w-[18px] h-[18px]"
        alt=""
        src="/keyboard-arrow-down.svg"
      />
      <img
        className="absolute top-[691px] left-[266px] w-[18px] h-[18px]"
        alt=""
        src="/keyboard-arrow-down.svg"
      />
    </div>
  );
};

export default MacBookAir;
